    function loader3() {
		
      const ratings = document.querySelectorAll('.star-rating');
      ratings.forEach(rating => {
        const stars = rating.querySelectorAll('i');
        const ratingValue = parseInt(rating.getAttribute('data-rating'));

        stars.forEach(star => {
          const value = parseInt(star.getAttribute('data-value'));

          if (value <= ratingValue) {
            star.classList.add('selected');
          } else {
            star.classList.remove('selected');
          }

          star.addEventListener('mouseover', starHover);
          star.addEventListener('mouseout', starHoverOut);
          star.addEventListener('click', starClick);
        });
      });
    }

    function starHover(event) {
      const star = event.target;
      const rating = star.closest('.star-rating');
      const stars = rating.querySelectorAll('i');
      const starValue = parseInt(star.getAttribute('data-value'));

      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= starValue) {
          s.classList.add('hovered');
        } else {
          s.classList.remove('hovered');
        }
      });
    }

    function starHoverOut(event) {
      const star = event.target;
      const rating = star.closest('.star-rating');
      const stars = rating.querySelectorAll('i');

      stars.forEach(s => s.classList.remove('hovered'));
    }

    function starClick(event) {
      const star = event.target;
      const rating = star.closest('.star-rating');
      const stars = rating.querySelectorAll('i');
      const ratingValue = parseInt(star.getAttribute('data-value'));

      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= ratingValue) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
        }
      });

      rating.setAttribute('data-rating', ratingValue);
    }

    window.addEventListener('DOMContentLoaded', loader3); // JavaScript Document
