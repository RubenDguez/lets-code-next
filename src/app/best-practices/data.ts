import { IOverviewConclusion } from "@/components/Blog/OverviewConclusion";
import { ISection } from "@/components/Blog/Section";

export const overview: IOverviewConclusion = {
	type: "Overview",
	text: "In today's dynamic landscape of software development, adhering to coding best practices is no longer merely a choice but a necessity. By embracing these principles, developers can elevate the quality, scalability, and maintainability of their codebase, ultimately delivering robust and efficient solutions that meet the evolving needs of users and stakeholders."
};

export const conclusion: IOverviewConclusion = {
	type: 'Conclusion',
	text: "In software development, implementing coding best practices is paramount for building robust, scalable, and maintainable solutions. By ensuring consistent formatting, meaningful naming, modularization, and effective error handling, developers enhance code quality and resilience.Unit testing, version control, optimization, and documentation further contribute to reliability, performance, and long- term maintainability.Embracing these practices not only elevates professionalism but also delivers value to clients and stakeholders in the dynamic realm of software development."
}

const codeConsistentFormattingEx = `
~~~ts
// Inconsistent formatting 
function foo( ): boolean { return true; } 

// Consistent formatting 
function foo(): boolean { return true; } 
~~~
`;

const codeBadVariableEx = `
~~~ts
// Bad variable name
let x: number = 10;

// Good variable name
let numberOfStudents: number = 10;
~~~
`;

const codeModularizationEx = `
~~~ts
// Non-modularized code
function calculateTotalPrice(quantity: number, price: number): number {
	return quantity * price;
}

// Modularized code
function calculateTotalPrice(quantity: number, price: number): number {
	return multiply(quantity, price);
}
function multiply(x: number, y: number): number {
	return x * y;
}
~~~
`

const codeMagicNumbersAndStrings = `
~~~ts
// Magic number
let totalPrice: number = quantity * 10.99;

// Named constant
const PRICE_PER_UNIT: number = 10.99;
let totalPrice: number = quantity * PRICE_PER_UNIT;
~~~
`

const codeErrorHandling = `
~~~ts
// Inadequate error handling
try {
	let result: number = 10 / 0;
} catch {
	console.log("An error occurred");
}

// Improved error handling
try {
	let result: number = 10 / 0;
} catch (error) {
	console.error("Error:", error);
}
~~~
`

const codeComments = `
~~~ts
// Bad comment
// Increment i
i++;

// Good comment
// Increment the index to move to the next element
i++;
~~~
`

const codeUnitTesting = `
~~~ts
// Without unit test
function add(x: number, y: number): number {
	return x + y;
}

// With unit test
function add(x: number, y: number): number {
	return x + y;
}

function testAdd(): void {
	console.assert(add(1, 2) === 3);
	console.assert(add(-1, 1) === 0);
}
~~~
`

const codeVersionControl = `
~~~sh
# Committing changes without version control
$ cp file.txt file_backup.txt

# Committing changes with Git
$ git add file.txt
$ git commit -m "Add new feature"
~~~
`

const codeOptimization = `
~~~ts
// Inefficient code
for (let i = 0; i < list.length; i++) {
	// Do something
}

// Optimized code
const size: number = list.length;
for (let i = 0; i < size; i++) {
	// Do something
}
~~~
`

const codeDocumentation = `
~~~ts
// Function without documentation
function calculateTotalPrice(quantity: number, price: number): number {
	return quantity * price;
}

// Function with documentation
/**
* Calculate the total price based on the given quantity and unit price.
*
* @param {number} quantity The quantity of items.
* @param {number} price The unit price of each item.
* @returns {number} The total price.
*/
function calculateTotalPrice(quantity: number, price: number): number {
	return quantity * price;
}
~~~
`

export const sections: ISection[] = [
	{
		title: "Code Quality",
		text: "Best practices help ensure that code is of high quality, readable, maintainable, and reliable. Well-written code is easier to understand, modify, and debug, leading to fewer errors and improved software performance."
	},
	{
		title: "Consistency",
		text: "Best practices promote consistency across the codebase, making it easier for developers to collaborate and understand each other's code. Consistent coding styles, naming conventions, and architectural patterns facilitate smoother integration of new features and reduce the learning curve for team members."
	},
	{
		title: "Efficiency",
		text: "Following best practices can streamline the development process by reducing rework, minimizing technical debt, and avoiding common pitfalls. By adhering to established guidelines and standards, developers can write code more efficiently and focus on solving business problems rather than dealing with avoidable issues."
	},
	{
		title: "scalability",
		text: "Well-designed code that follows best practices is more scalable and adaptable to changing requirements and increasing complexity. Modularization, abstraction, and adherence to principles such as SOLID enable systems to evolve and grow without sacrificing stability or performance."
	},
	{
		title: "Reduced Risks",
		text: "Best practices mitigate risks associated with software development, including security vulnerabilities, performance bottlenecks, and compatibility issues. Practices such as code reviews, automated testing, and version control help catch errors early in the development cycle, minimizing the likelihood of critical issues reaching production environments."
	},
	{
		title: "Maintainability",
		text: "Code that follows best practices is easier to maintain over time. Clear documentation, modular design, and separation of concerns facilitate code understanding and troubleshooting, even as the codebase grows in size and complexity. This reduces the cost and effort required for ongoing maintenance and support activities."
	},
	{
		title: "Professionalism",
		text: "Adhering to best practices demonstrates professionalism and commitment to delivering high-quality software solutions. Clients, stakeholders, and users are more likely to trust and value products developed using established standards and practices, enhancing the reputation and credibility of the development team and organization."
	},
	{
		text: "Implementing coding best practices is pivotal in software development, serving as the foundation for creating resilient, scalable, and maintainable solutions. By prioritizing consistent code formatting, meaningful variable naming, modularization, and effective error handling, developers enhance code quality and collaboration while mitigating risks. Through practices like unit testing, version control, optimization, and documentation, they ensure reliability, performance, and long-term maintainability. Embracing these principles elevates professionalism and delivers value to clients and stakeholders in the ever-evolving landscape of software development."
	},
	{
		title: "Consistent Code Formatting",
		text: "Enhances readability and maintainability. It ensures that all developers can easily understand and navigate the codebase. Additionally, consistent formatting reduces the likelihood of introducing syntax errors or misunderstandings during code reviews and collaboration.",
		code: codeConsistentFormattingEx,
	},
	{
		title: "Meaningful Variable Names",
		text: "Descriptive variable names convey the purpose and usage of variables, making the code self-explanatory and easier to understand. Meaningful names reduce the need for comments and improve code readability, which is crucial for maintaining codebase over time and facilitating collaboration among team members.",
		code: codeBadVariableEx,
	},
	{
		title: "Modularization",
		text: "Breaks down complex code into smaller, reusable components, promoting code reuse and maintainability. By isolating functionalities into distinct modules or functions, developers can focus on specific tasks, enhance code organization, and facilitate testing and debugging.Modularization also supports scalability and extensibility by allowing components to be added, modified, or replaced independently.",
		code: codeModularizationEx
	},
	{
		title: "Avoiding Magic Numbers and Strings",
		text: "Magic numbers and strings are cryptic and prone to errors when used multiple times in code. By defining named constants or variables, developers make the code more self- explanatory and easier to maintain.Named constants provide a single point of control for values that may change in the future, improving code readability and reducing the risk of introducing bugs.",
		code: codeMagicNumbersAndStrings,
	},
	{
		title: "Error Handling",
		text: "Proper error handling improves the robustness and reliability of software systems. By anticipating and handling exceptions gracefully, developers prevent crashes and unexpected behavior, enhancing the user experience and minimizing downtime.Clear error messages also aid in troubleshooting and debugging, helping developers identify and resolve issues more efficiently.",
		code: codeErrorHandling
	},
	{
		title: "Code Comments",
		text: "Provide additional context and explanation for complex or non-obvious code segments. They help other developers understand the intent behind the code, making it easier to maintain and modify.Well - placed comments clarify the purpose of algorithms, business logic, or edge cases, reducing ambiguity and fostering collaboration within development teams.",
		code: codeComments
	},
	{
		title: "Unit Testing",
		text: "Verifies the correctness of individual components or functions, ensuring that they behave as expected under different conditions. By writing and running tests automatically, developers catch bugs early in the development process, reducing the cost and effort of fixing them later.Unit tests also serve as documentation and provide confidence when refactoring or extending code.",
		code: codeUnitTesting
	},
	{
		title: "Version Control",
		text: "Systems track changes to code over time, enabling collaboration, history tracking, and rollback to previous states if necessary. By using version control, developers can work concurrently on the same codebase, merge changes seamlessly, and maintain a clear audit trail of modifications.Version control enhances code quality, reliability, and teamwork within development projects.",
		code: codeVersionControl
	},
	{
		title: "Optimization",
		text: "Improves the performance and efficiency of code, enhancing the user experience and reducing resource consumption. By optimizing algorithms, data structures, and resource usage, developers ensure that software systems meet performance requirements and scale effectively.Optimization also minimizes unnecessary overhead and latency, improving responsiveness and scalability.",
		code: codeOptimization
	},
	{
		title: "Documentation",
		text: "Provides comprehensive information about code functionality, usage, and dependencies. It helps developers understand how to use and interact with code modules, reducing the learning curve and onboarding time for new team members.Clear documentation also facilitates maintenance, troubleshooting, and knowledge transfer within development teams, ensuring that code remains understandable and maintainable over time.",
		code: codeDocumentation
	}
]
