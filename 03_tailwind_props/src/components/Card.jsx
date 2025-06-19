

function Card({username,}) {

  return (
      <>
          <h3>THIS DIV OF CARD</h3>

           <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="/>
      <div className="p-4">
                  <h1 className="text-xl font-semibold text-gray-800 mb-2">{ username }</h1>
        <p className="text-gray-600 text-sm">when you love do things then you will be the winner what you do, also one thing enjoy the process.</p>
      </div>
    </div>
      </>
  )
}

export default Card
