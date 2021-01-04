{
  let model = { url: window.location.href }
  let input = document.createElement('input')

  input.classList.add('Input', 'URLInput')

  input.addEventListener('change', () => {
    model.url = input.value.toUpperCase()
  })

  document.body.appendChild(input)

  // document.querySelector('Element').value
  // オブジェクトは 'null' である可能性があります。ts(2531)


}