const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showFullSection() {
  console.log(this)
  const section = this.parentNode.parentNode
  console.log(section)
  section.classList.add('is-open')
}

sectionHeaderIconButton.addEventListener('click', showFullSection)
