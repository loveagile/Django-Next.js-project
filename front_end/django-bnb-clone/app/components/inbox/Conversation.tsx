import Image from 'next/image';

const Conversation = () => {
    return (
        <div className='px-6 py-4 cursor pointer space-y-4 border border-gray-300 rounded-xl'>
            <p className='mb-6 text-xl'>John Doe</p>
            <p className='text-airbnb-dark'>Go to Conversation</p>
        </div>
    )
}

export default Conversation;