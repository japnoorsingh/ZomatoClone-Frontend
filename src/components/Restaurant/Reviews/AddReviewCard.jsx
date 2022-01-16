import React, { useState } from "react";

// component
import ReviewModal from "./ReviewModal";

function AddReviewCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (!localStorage.zomatoUser) {
      // If jwt token (which is stored in local storage when it is first created when user sign in) is not available in local storage.
      return alert("Please sign in to post a review");
    }

    setIsOpen(true);
  };

  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl font-medium">Rate your experience for</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
          {/* If you have two components with same tyoe but different name, you can only fill one of them. Choice is given to the user */}
        </div>
      </div>
      <button onClick={openModal} className="text-zomato-400">
        Write a review
      </button>
    </>
  );
}

export default AddReviewCard;
