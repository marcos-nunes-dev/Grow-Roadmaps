
function iconsSvg(props) {
  return( <object data={`../static/icons/${props.icon}.svg`} {...props} type="image/svg+xml"></object>)
}

export default iconsSvg
