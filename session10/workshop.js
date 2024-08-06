document.getElementById("reviewLikeButton").addEventListener("click", () => {
  const reviewContainer = document.getElementById("doc_review_container");
  const feedbackCollect = document.getElementById("doc_feedback_collect");

  reviewContainer.style.display = "none";
  feedbackCollect.style.display = "block";

  const notifyCheckbox = document.getElementById("notifyMeAboutChanges");
  const emailInput = document.getElementById("feedback_mail");

  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(() => {
    document
      .getElementById("reviewSubmit")
      .addEventListener("click", checkNotification);

    observer.disconnect();
  });

  observer.observe(feedbackCollect, config);

  const checkNotification = () => {
    if (!notifyCheckbox.checked) {
      console.log("Notify Ol!");
    } else {
      localStorage.setItem("userEmail", emailInput.value);
    }
  };
});
