import React, { useState } from 'react'
import marked from 'marked'
import './App.css'

const defaultValue =  '# Markdown Previewer \n\n## Trouble Subsection \n\n It is always good practice to read the documentation of the libraries you are planning on using. **Review the documentation** for [markedjs](https://github.com/markedjs/marked) to review the possibilities of this previewer. \n\n### Sample Code\n\n```\n() => {}\n```\n\n ### Ordered Lists\n\n 1. All-purpose Flour\n 2. Sugar\n 3. Corn\n\n### Unordered List\n\n- gold\n\n- silver\n\n- copper\n\n### Quoting\n\n> A blockquote for qadding quotes to your documentation \n\n![An image](https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "Mountain image")\n\n'

export default function App() {
  const [value, setValue] = useState(defaultValue)

  const handleChange = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const getRawMarkup = () => {
    return {__html: marked(value)}
  }
  return (
    <>
      <header>
        <h1 className="title">Markdown Previewer</h1>
      </header>
      <div className="app">
        <textarea
            id="editor" 
            rows="10" cols="75" 
            onChange={handleChange}
            defaultValue={value}
          />
        <h4 className="title">Preview</h4>
        <div id='preview' dangerouslySetInnerHTML={getRawMarkup()}/>
        
      </div>
      <footer>&copy; 2020 by <a href="https://github.com/greenervigil">Greener-Vigil</a></footer>
    </>
  );
}
