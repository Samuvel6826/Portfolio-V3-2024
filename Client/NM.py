class Student:
    def __init__(self):
        # Private instance variables initialized to None
        self.__student_id = None
        self.__marks = None
        self.__age = None
        self.__course_id = None  # New attribute to store the course ID

    # Setter methods
    def set_student_id(self, student_id):
        self.__student_id = student_id
    
    def set_marks(self, marks):
        self.__marks = marks
    
    def set_age(self, age):
        self.__age = age

    # Getter methods
    def get_student_id(self):
        return self.__student_id
    
    def get_marks(self):
        return self.__marks
    
    def get_age(self):
        return self.__age

    # Method to validate marks
    def validate_marks(self):
        if self.__marks is not None and 0 <= self.__marks <= 100:
            return True
        else:
            return False
    
    # Method to validate age
    def validate_age(self):
        if self.__age is not None and self.__age > 20:
            return True
        else:
            return False
    
    # Method to check if the student qualifies for admission
    def check_qualification(self):
        if self.validate_marks() and self.validate_age():
            if self.__marks >= 65:
                return True
            else:
                return False
        else:
            return False

    # Method to choose a course based on course ID
    def choose_course(self, course_id):
        # Assuming valid course IDs are between 1000 and 1005 (example range)
        valid_course_ids = [1000, 1001, 1002, 1003, 1004, 1005]
        
        if course_id in valid_course_ids:
            self.__course_id = course_id  # Set the chosen course ID
            return True
        else:
            return False

# Example usage:
maddy = Student()
maddy.set_student_id(1004)
maddy.set_age(21)
maddy.set_marks(65)

if maddy.check_qualification():
    print("Student has qualified")
    if maddy.choose_course(1002):
        print("Course allocated")
    else:
        print("Invalid course id")
else:
    print("Student has not qualified")