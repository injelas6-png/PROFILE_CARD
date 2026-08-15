const followBtn = document.getElementById('followBtn');
const followIcon = document.getElementById('followIcon');
const followLabel = document.getElementById('followLabel');

followBtn.addEventListener('click', () => {
  const isFollowing = followBtn.classList.toggle('following');
  followLabel.textContent = isFollowing ? 'Following' : 'Follow';
  followIcon.textContent = isFollowing ? '✓' : '+';
});
