# PDFExtract

PDFExtract is a Node.js application for extracting structured data from PDF documents. It provides a set of tools for processing text extracted from PDF files, including cleaning, formatting, and mapping to meaningful entities.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RXGabriel/PDFExtract.git
```

2. Navigate to the project directory:

```bash
cd pdfExtract
```

3. Install dependencies:

```bash
npm install
```

## Usage

To use PDFExtract, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Provide PDF documents to be processed in the `/docs` directory.
3. Run the application:

```bash
npm start
```

## Features

- Extract structured data from PDF documents.
- Clean and format extracted text.
- Map extracted data to meaningful entities (e.g., people, addresses).
- Ensure safety when working with regular expressions.

## Project Structure

- `src/`: Contains the source code for the PDFExtract application.
  - `index.js`: Main entry point for the application.
  - `textProcessorFacade.js`: Facade for text processing operations.
  - `textProcessorFluentAPI.js`: Fluent API for text processing.
  - `person.js`: Class for representing a person entity.
  - `util.js`: Utility functions for working with regular expressions.
- `test/`: Contains unit tests for the application.
- `docs/`: Directory for storing PDF documents to be processed.

## Scripts

- `npm start`: Run the application.
- `npm test`: Run unit tests.
- `npm run test:cov`: Run tests with coverage report.

## Dependencies

- `pdf-parse`: Library for extracting text from PDF documents.
- `safe-regex`: Library for checking the safety of regular expressions.
- `mocha`, `chai`: Testing framework and assertion library.
- `nyc`: Istanbul code coverage tool.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
