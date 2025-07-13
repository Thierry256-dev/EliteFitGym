// Plan selection
document.querySelectorAll(".select-plan").forEach((button) => {
  button.addEventListener("click", function () {
    const plan = this.getAttribute("data-plan");

    // Set plan details
    let planName, planPrice, planFeatures;

    switch (plan) {
      case "basic":
        planName = "BASIC";
        planPrice = "49";
        planFeatures = `
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Access to gym floor</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Locker room access</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Free Wi-Fi</span>
                            </li>
                            <li class="flex items-center text-gray-400">
                                <i class="fas fa-times-circle mr-2"></i>
                                <span>Group classes</span>
                            </li>
                            <li class="flex items-center text-gray-400">
                                <i class="fas fa-times-circle mr-2"></i>
                                <span>Recovery zone access</span>
                            </li>
                        `;
        break;
      case "standard":
        planName = "STANDARD";
        planPrice = "79";
        planFeatures = `
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>All Basic features</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Unlimited group classes</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Recovery zone access</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>1 free personal training session</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Nutrition consultation</span>
                            </li>
                        `;
        break;
      case "premium":
        planName = "PREMIUM";
        planPrice = "129";
        planFeatures = `
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>All Standard features</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>24/7 facility access</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>4 personal training sessions</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Complimentary towel service</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                <span>Guest privileges</span>
                            </li>
                        `;
        break;
    }

    // Update plan details
    document.getElementById("plan-name").textContent = planName;
    document.getElementById("plan-price").textContent = planPrice;
    document.getElementById("plan-features").innerHTML = planFeatures;

    // Hide all pages
    document.querySelectorAll(".page-container").forEach((page) => {
      page.classList.remove("active");
    });

    // Show selected plan page
    document.getElementById("selected-plan-page").classList.add("active");

    // Scroll to top
    window.scrollTo(0, 0);
  });
});
