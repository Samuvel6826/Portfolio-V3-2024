const winston = require('winston');
const util = require('util');
const { getFormattedDate } = require('./utilities'); // Import the function from your util file

// Configure colors for log levels
winston.addColors({
    error: 'bold red',
    warn: 'italic yellow',
    info: 'green',
    http: 'cyan',
    debug: 'magenta',
});

// Safe stringification function that handles circular references
const safeStringify = (obj) => {
    if (obj === undefined) return 'undefined';  // 'undefined' handled as string
    if (obj === null) return 'null';  // 'null' handled as string

    try {
        // Handle circular references by using a replacer
        return typeof obj === 'object'
            ? JSON.stringify(obj, getCircularReplacer())
            : obj.toString();
    } catch (error) {
        // Fallback to util.inspect if JSON.stringify fails
        return util.inspect(obj, {
            depth: 3,
            colors: false,
            maxArrayLength: 100
        });
    }
};

// Circular reference handler
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular Reference]';
            }
            seen.add(value);
        }
        return value;
    };
};

// Configure Winston logger
const customLogger = winston.createLogger({
    level: 'info',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: getFormattedDate  // Use the imported function for timestamp formatting
        }),
        winston.format.printf(({ timestamp, level, message, ...metadata }) => {
            let msg = `${timestamp} [${level}]: `;

            // Safely stringify the message if it's an object
            msg += typeof message === 'object'
                ? safeStringify(message)
                : message;

            // Add metadata if it exists
            if (Object.keys(metadata).length > 0) {
                msg += ' ' + safeStringify(metadata);
            }

            return msg;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.uncolorize() // Remove colors for file transport
        }),
        new winston.transports.File({
            filename: 'combined.log',
            format: winston.format.uncolorize() // Remove colors for file transport
        })
    ]
});

// Add convenience methods for structured logging
customLogger.logRequest = (req, message = 'Request received') => {
    const logData = {
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        body: req.body,
        headers: req.headers
    };

    customLogger.info(`${message}: ${safeStringify(logData)}`);
};

customLogger.logError = (error, context = {}) => {
    const logData = {
        message: error.message,
        stack: error.stack,
        ...context
    };

    customLogger.error(safeStringify(logData));
};

module.exports = customLogger;