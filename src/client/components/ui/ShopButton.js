import Link from 'next/link'
import template from '../../css/constants/styles'

const linkStyles = {
  color: 'white',
  textDecoration: 'none',
  padding: 10,
  paddingLeft: 18,
  paddingRight: 18,
  borderRadius: 6,
  backgroundColor: template.jumbotron_back,
  fontFamily: template.font_accent,
  fontWeight: 600,
  textDecoration: 'none',

}

const Button = ({to, text}) => {
  return (
      <Link href={to}>
          <a target="_blank" style={{textDecoration: 'none'}}>
            <span style={linkStyles}>{text}</span></a>
      </Link>

  )
}
export default Button
