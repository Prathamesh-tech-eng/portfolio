import React, { useState } from 'react'

export default function ResumeSelector({ className = '', resumes = null, selected: selectedProp, onChange }) {
  const defaultResumes = [
    { id: 'frontend', label: 'Front-End Resume', file: '/resumes/Resume_FrontEnd_PrathameshChikkali.pdf' },
    { id: 'backend', label: 'Back-End Resume', file: '/resumes/Resume_BackEnd_PrathameshChikkali.pdf' },
    { id: 'datasci', label: 'Data Science Resume', file: '/resumes/Resume_DataScience_PrathameshChikkali.pdf' },
    { id: 'devops', label: 'DevOps Resume', file: '/resumes/Resume_DevOps_PrathameshChikkali.pdf' },
    { id: 'software', label: 'Software Dev Resume', file: '/resumes/Resume_SoftwareDevelopment_PrathameshChikkali.pdf' },
  ]

  const list = (resumes && resumes.length) ? resumes : defaultResumes
  const [internalSelected, setInternalSelected] = useState(list[0].file)
  const selected = selectedProp ?? internalSelected
  const setSelected = (v) => {
    if (onChange) onChange(v)
    else setInternalSelected(v)
  }

  return (
    <div className={`${className} max-w-sm w-auto`}> 
      <div className="flex flex-col md:flex-row md:items-center gap-3 w-auto">
        <label className="sr-only">Choose resume</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="px-4 py-2 rounded-full border border-primary text-primary bg-gradient-to-br from-primary/5 to-transparent flex-1 min-w-0 appearance-none text-sm"
          aria-label="Select resume"
        >
          {list.map((r) => (
            <option key={r.id} value={r.file}>{r.label}</option>
          ))}
        </select>

        <div className="flex flex-col items-center md:items-center justify-center gap-2">
          <a
            href={selected}
            download
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition flex-shrink-0 text-center shadow-sm bg-gradient-to-br from-primary/5 to-transparent"
            aria-label="Download selected resume"
          >
            Download
          </a>

          <a
            href={selected}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition flex-shrink-0 text-center shadow-sm bg-gradient-to-br from-primary/5 to-transparent"
            aria-label="Preview resume"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  )
}
