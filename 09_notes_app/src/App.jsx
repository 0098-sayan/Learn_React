import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !details.trim()) return
    
    setTask(prevTask => [...prevTask, { 
      id: Date.now(), 
      title, 
      details 
    }])
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (id) => {
    setTask(prevTask => prevTask.filter(note => note.id !== id))
  }

  const colors = [
    'from-purple-400 to-pink-400',
    'from-blue-400 to-cyan-400',
    'from-green-400 to-emerald-400',
    'from-orange-400 to-red-400',
    'from-yellow-400 to-orange-400',
    'from-indigo-400 to-purple-400',
  ]

  return (
    <div className='min-h-screen lg:flex bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white'>
      
      {/* Form Section with Glassmorphism */}
      <div className='lg:w-1/2 p-10 flex items-center justify-center'>
        <form 
          onSubmit={submitHandler} 
          className='w-full max-w-md backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20'
        >
          <h1 className='text-5xl mb-8 font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
            Add Notes ✨
          </h1>

          {/* Title Input */}
          <div className='mb-6'>
            <input
              type="text"
              placeholder='Enter Notes Heading'
              className='w-full px-5 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 placeholder-white/60 text-white font-medium'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Details Textarea */}
          <div className='mb-6'>
            <textarea
              className='w-full px-5 py-3 h-32 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 placeholder-white/60 text-white font-medium resize-none'
              placeholder='Write Details here...'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95'
          >
            Add Note 🚀
          </button>
        </form>
      </div>

      {/* Notes Display Section */}
      <div className='lg:w-1/2 lg:border-l-2 lg:border-white/20 p-10'>
        <div className='backdrop-blur-xl bg-white/5 p-6 rounded-3xl border border-white/10'>
          <h1 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent'>
            Recent Notes 📝
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[calc(100vh-200px)] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent'>
            {task.length === 0 ? (
              <div className='col-span-2 text-center text-white/50 py-10'>
                <p className='text-lg'>No notes yet. Add your first note! 🎯</p>
              </div>
            ) : (
              task.map((elem) => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)]
                
                return (
                  <div 
                    key={elem.id} 
                    className={`group backdrop-blur-md bg-gradient-to-br ${randomColor} bg-opacity-20 p-6 rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between min-h-[200px]`}
                  >
                    <div>
                      <h3 className='text-xl font-bold mb-3 text-white drop-shadow-lg line-clamp-2'>
                        {elem.title}
                      </h3>
                      <p className='text-sm text-white/90 leading-relaxed line-clamp-4'>
                        {elem.details}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => deleteNote(elem.id)} 
                      className='mt-4 w-full bg-red-500/80 hover:bg-red-600 backdrop-blur-sm py-2 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg'
                    >
                      Delete 🗑️
                    </button>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
