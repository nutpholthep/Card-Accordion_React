
import PropTypes from 'prop-types'

function Card({fname,lname,username,avatar}) {
  return (
    <div className='mt-5 shadow-lg p-2 rounded-md  bg-red-200'>
        <img src={avatar} alt="" className='w-1/2 mx-auto'/>
        <h1 className='text-lg font-bold'>{`${fname} ${lname}`}</h1>
        <h2>{username}</h2>

    </div>
  )
}

Card.propTypes = {
    fname:PropTypes.string,
    lname:PropTypes.string,
    avatar:PropTypes.string,
    username:PropTypes.string
}

export default Card
