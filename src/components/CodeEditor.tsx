import { useState, useEffect } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { python } from "@codemirror/lang-python"
import {
  Button,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
} from "@mui/material"
import { motion } from "framer-motion"
import { loadPyodide, PyodideInterface } from "pyodide"

export default function CodeEditor() {
  const [code, setCode] = useState("print('Hello, Python!')")
  const [output, setOutput] = useState("")
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPyodideCDN() {
      try {
        // const pyodideModule = await import(
        //   "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.mjs"
        // )
        const pyInstance = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.2/full/',
        })
        pyInstance.runPython(`
          import sys
          from io import StringIO
          sys.stdout = StringIO()
        `)
        setPyodide(pyInstance)
      } catch (err) {
        setError("Failed to load Python runtime. Please refresh.")
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    loadPyodideCDN()
  }, [])

  async function runCode() {
    if (!pyodide) return
    try {
      pyodide.runPython(code)
      const result = pyodide.runPython("sys.stdout.getvalue()")
      pyodide.runPython(`
        sys.stdout.truncate(0)
        sys.stdout.seek(0)
      `)
      setOutput(result)
      setError(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      setError(err.toString())
    }
  }

  return (
    <Card className='bg-orange-100 rounded-lg p-4 shadow-lg'>
      <CardContent>
        <Typography variant='h6' className='text-orange-700 mb-2'>
          ✏️ Write Python Code:
        </Typography>
        <Box className='border-2 border-orange-500 rounded-lg overflow-hidden'>
          <CodeMirror
            value={code}
            extensions={[python()]}
            onChange={(value) => setCode(value)}
            indentWithTab
            className='h-40 text-base font-mono'
          />
        </Box>

        <Box className='mt-4 text-center'>
          {loading ? (
            <CircularProgress color='primary' />
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}>
              <Button
                variant='contained'
                color='success'
                className='px-6 py-3 font-bold text-lg rounded-full shadow-md transition-all'
                onClick={runCode}
                disabled={!pyodide}>
                ▶️ Run Code
              </Button>
            </motion.div>
          )}
        </Box>

        <Box className='mt-4'>
          <Typography variant='h6' className='text-blue-700'>
            📤 Output:
          </Typography>
          <Box className='bg-blue-100 p-4 rounded-lg min-h-[50px] text-blue-900 font-mono'>
            <pre>{output || "Run the code to see the output"}</pre>
          </Box>
        </Box>

        {error && (
          <Alert severity='error' className='mt-4'>
            {error}
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
