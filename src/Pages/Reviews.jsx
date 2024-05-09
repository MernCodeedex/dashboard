import React from 'react'
import '../Pages/Reviews.css'

const Reviews = () => {
    const reviews = [
        { id: 1, author: 'John Doe', content: 'Great product, highly recommended!' },
        { id: 2, author: 'Jane Smith', content: 'Good quality and fast delivery.' },
        { id: 1, author: 'John Doe', content: 'Great product, highly recommended!' },
        { id: 2, author: 'Jane Smith', content: 'Good quality and fast delivery.' },
    ];
  return (
    <div className="review-card">
    {reviews.map(review => (
        <div key={review.id}>
            <p><strong>Author:</strong> {review.author}</p>
            <p>{review.content}</p>
        </div>
    ))}
</div>
  )
}

export default Reviews
