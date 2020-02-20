import React, { useMemo, useState } from 'react'

const computePriority = element => {
  console.log(element)
  return 0
}

const PriorityForm = ({ element: baseElement, updateElement }) => {
  const [element, onElementChange] = useState(baseElement)
  const priority = useMemo(() => {
    return computePriority(element)
  }, [element])

  const handleFieldChange = ({ target: { name, value } }) => {
    onElementChange({ ...element, [name]: value })
  }

  const handleBooleanChange = ({ target: { name, checked } }) => {
    onElementChange({ ...element, [name]: checked })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log()
  }

  return (
    <div>
      <h2>
        Priority: <span>{priority}</span>
      </h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={element.name ?? ''}
          onChange={handleFieldChange}
        />
        <div>
          <label htmlFor="url">URL to resource</label>
          <input
            type="url"
            name="url"
            value={element.url ?? ''}
            onChange={handleFieldChange}
          />
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={handleFieldChange}
          rows="5"
          value={element.description ?? ''}
        />
        <hr />
        <h3>Content Exploration</h3>
        <div>
          <input
            type="checkbox"
            name="abstract"
            id="abstract"
            value={element.abstract ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="abstract">Is the abstract promising?</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="summary"
            id="summary"
            value={element.summary ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="summary">Is the summary promising?</label>
        </div>
        <hr />
        <h3>Skimming</h3>
        <div>
          <input
            type="checkbox"
            name="code"
            id="code"
            value={element.code ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="code">Does it contain code?</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="includesExamples"
            id="includesExamples"
            value={element.includesExamples ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="includesExamples">
            Does it have enough examples?
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="longRead"
            id="longRead"
            value={element.longRead ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="longRead">
            Could you read it in a reasonable time?
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="notation"
            id="notation"
            value={element.notation ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="notation">
            Is the use of notation relatively under control?
          </label>
        </div>
        <hr />
        <h3>Organization Importance</h3>
        <div>
          <input
            type="checkbox"
            name="someoneElse"
            id="someoneElse"
            value={element.someoneElse ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="someoneElse">
            Does someone else want me to read it?
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ownFinding"
            id="ownFinding"
            value={element.ownFinding ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="ownFinding">Did I find it myself?</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="otherReferences"
            id="otherReferences"
            value={element.otherReferences ?? false}
            onChange={handleBooleanChange}
          />
          <label htmlFor="otherReferences">
            Do other papers make reference to it?
          </label>
        </div>
        <hr />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default PriorityForm
