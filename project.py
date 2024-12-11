# Practice 11
#! 1
numbers = [74, 19, 105, 20, -2, 67, 77, 124, -45, 38]
valid_numbers = [num for num in numbers if 0 <= num <= 100]
total = sum(valid_numbers)
average = total / len(valid_numbers) if valid_numbers else 0

print("Valid numbers:", valid_numbers)
print("Total:", total)
print("Average:", average)

#! 2
import random

lottery_numbers = [random.randint(0, 9) for _ in range(7)]
print("Lottery Numbers:", lottery_numbers)

#! 3
rainfall = []
for i in range(12):
    amount = float(input(f"Enter rainfall for month {i + 1}: "))
    rainfall.append(amount)

total_rainfall = sum(rainfall)
average_rainfall = total_rainfall / 12
highest_month = rainfall.index(max(rainfall)) + 1
lowest_month = rainfall.index(min(rainfall)) + 1

print("Total Rainfall:", total_rainfall)
print("Average Rainfall:", average_rainfall)
print("Month with Highest Rainfall:", highest_month)
print("Month with Lowest Rainfall:", lowest_month)

#! 4
numbers = [float(input(f"Enter number {i + 1}: ")) for i in range(20)]
lowest = min(numbers)
highest = max(numbers)
total = sum(numbers)
average = total / len(numbers)

print("Lowest number:", lowest)
print("Highest number:", highest)
print("Total:", total)
print("Average:", average)

#! 5
def load_accounts(filename):
    with open(filename, 'r') as file:
        return [line.strip() for line in file]

valid_accounts = load_accounts('charge_accounts.txt')
user_account = input("Enter your charge account number: ")

if user_account in valid_accounts:
    print("The account number is valid.")
else:
    print("The account number is invalid.")

#! 6
import random

def roll(number_of_throws):
    if number_of_throws <= 0:
        print("Number of throws must be positive.")
        return []

    rolls = [random.randint(1, 6) for _ in range(number_of_throws)]
    return sorted(rolls)

num_throws = int(input("Enter the number of throws: "))
result = roll(num_throws)
print("Sorted Dice Rolls:", result)

#! 7
# Correct answers for the exam
correct_answers = [
    'A', 'C', 'A', 'A', 'D',
    'B', 'C', 'A', 'C', 'B',
    'A', 'D', 'C', 'A', 'D',
    'C', 'B', 'B', 'D', 'A'
]

# Load student answers from a file
def load_student_answers(filename):
    with open(filename, 'r') as file:
        return [line.strip() for line in file]

# Main grading logic
def grade_exam(correct_answers, student_answers):
    total_correct = 0
    incorrect_questions = []

    for i in range(len(correct_answers)):
        if student_answers[i] == correct_answers[i]:
            total_correct += 1
        else:
            incorrect_questions.append(i + 1)  # Question numbers are 1-based

    return total_correct, incorrect_questions

# File containing student answers
filename = 'student_answers.txt'  # Replace with the actual file path
student_answers = load_student_answers(filename)

# Ensure the number of answers matches
if len(student_answers) != len(correct_answers):
    print("Error: The number of student answers does not match the number of questions.")
else:
    total_correct, incorrect_questions = grade_exam(correct_answers, student_answers)

    # Display results
    print("Total Correct Answers:", total_correct)
    print("Total Incorrect Answers:", len(incorrect_questions))
    print("Incorrectly Answered Questions:", incorrect_questions)

    # Determine if the student passed
    if total_correct >= 15:
        print("Result: The student passed the exam!")
    else:
        print("Result: The student failed the exam.")


#! 11
def is_lo_shu_magic_square(grid):
    # Check if the grid contains 3 rows and 3 columns
    if len(grid) != 3 or any(len(row) != 3 for row in grid):
        return False

    # Flatten the grid and check if it contains numbers 1 through 9 exactly
    numbers = [num for row in grid for num in row]
    if sorted(numbers) != list(range(1, 10)):
        return False

    # Calculate the sum of the first row to use as a reference
    magic_sum = sum(grid[0])

    # Check sums of all rows
    for row in grid:
        if sum(row) != magic_sum:
            return False

    # Check sums of all columns
    for col in range(3):
        if sum(grid[row][col] for row in range(3)) != magic_sum:
            return False

    # Check sums of the two diagonals
    if sum(grid[i][i] for i in range(3)) != magic_sum:
        return False
    if sum(grid[i][2 - i] for i in range(3)) != magic_sum:
        return False

    # If all checks pass, it's a Lo Shu Magic Square
    return True


# Test the function with a sample grid
magic_square = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
]

non_magic_square = [
    [4, 9, 2],
    [3, 5, 8],
    [7, 1, 6]
]

print("Is magic_square a Lo Shu Magic Square?", is_lo_shu_magic_square(magic_square))  # Should print True
print("Is non_magic_square a Lo Shu Magic Square?", is_lo_shu_magic_square(non_magic_square))  # Should print False

#! 12
def file_line_viewer():
    try:
        # Prompt the user for the file name
        filename = input("Enter the name of the file: ")
        
        # Read all lines from the file into a list
        with open(filename, 'r') as file:
            lines = file.readlines()
        
        print(f"The file contains {len(lines)} lines.")
        
        while True:
            try:
                # Ask the user for a line number to display
                line_number = int(input("Enter the line number you want to view (or -1 to quit): "))
                if line_number == -1:
                    print("Exiting program.")
                    break
                
                # Display the specified line
                print(f"Line {line_number}: {lines[line_number - 1]}")
            except ValueError:
                print("Error: Please enter a valid integer.")
            except IndexError:
                print("Error: Line number out of range. Please try again.")
    except FileNotFoundError:
        print("Error: The file was not found or could not be opened.")
    except IOError:
        print("Error: An error occurred while accessing the file.")

# Call the function
file_line_viewer()

#! 13
import random

def magic_8_ball():
    try:
        # Load responses from the file
        with open('8_ball_responses.txt', 'r') as file:
            responses = [line.strip() for line in file.readlines()]
        
        print("Welcome to the Magic 8 Ball!")
        
        while True:
            # Prompt user for a question
            question = input("Ask the Magic 8 Ball a yes/no question (or type 'quit' to exit): ")
            
            if question.lower() == 'quit':
                print("Goodbye!")
                break
            
            # Randomly select a response
            print(f"Magic 8 Ball says: {random.choice(responses)}")
    except FileNotFoundError:
        print("Error: 8_ball_responses.txt not found.")
    except IOError:
        print("Error: An error occurred while accessing the file.")

# Call the function
magic_8_ball()

#! 14
import matplotlib.pyplot as plt

def expense_pie_chart():
    try:
        # Load expense data from a text file
        with open('expenses.txt', 'r') as file:
            lines = file.readlines()
        
        categories = []
        amounts = []
        
        for line in lines:
            category, amount = line.split(',')
            categories.append(category.strip())
            amounts.append(float(amount.strip()))
        
        # Create a pie chart
        plt.figure(figsize=(8, 8))
        plt.pie(amounts, labels=categories, autopct='%1.1f%%', startangle=90)
        plt.title("Monthly Expenses")
        plt.show()
    except FileNotFoundError:
        print("Error: expenses.txt not found.")
    except IOError:
        print("Error: An error occurred while accessing the file.")
    except ValueError:
        print("Error: Invalid data format in the file.")

# Call the function
expense_pie_chart()