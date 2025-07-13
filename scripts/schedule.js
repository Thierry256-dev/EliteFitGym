// Schedule day switching
document.querySelectorAll(".schedule-day").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".schedule-day").forEach((btn) => {
      btn.classList.remove("active", "btn-primary");
      btn.classList.add("bg-white", "text-secondary");
    });

    // Add active class to clicked button
    this.classList.add("active", "btn-primary");
    this.classList.remove("bg-white", "text-secondary");

    // Get target day
    const targetDay = this.getAttribute("data-day");

    // Hide all day contents
    document.querySelectorAll(".day-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Show target day content
    document.getElementById(`${targetDay}-content`).classList.add("active");
  });
});
