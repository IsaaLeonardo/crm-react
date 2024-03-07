function Error({ children }) {
  return (
    <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-sm mb-5 uppercase">
      { children }
    </p>
  )
}

export default Error
