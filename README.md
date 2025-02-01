# [AI Python Tutor]()

It's a python tutor web app powered by AI for kids to ask & learn coding questions. 

## Prerequisites

Before you start, ensure you have Node.js installed on your machine. If not, you can download and install it from [here](https://nodejs.org/).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/avi074/ai-python-tutor.git
```

2. Navigate into the project directory:

```bash
cd ai-python-tutor
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the project, open the Folder in IDE & run

```bash
npm run dev
```

To build your project for production:

```bash
npm run build
```

To use AI locally just create .env file & add OPENAI API Key

```
VITE_OPENAI_API_KEY=<OPENAI_API_KEY>
```
## Folder Structure

- `public/` : Contains your public resources.

- `src/` : Contains your JSX/Source files

  - `assets/` : Assets
  - `components/` : React Components & UI
  - `pages/` : Web Pages
  
- `index.html` : Index HTML file


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
