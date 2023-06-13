export const partiallyApply = (Component, partialProps) => {
  return props => {
     return <Component {...partialProps} {...props} />
  }
}

export const Button = ({ size, color, text, ...props}) => {
    return (
      <button style={{
           padding: size === "large" ? "32px" : "8px",
           fontSize: size === "large" ? "32px" : "8px",
           backgroundColor: color,
           }} {...props}>
             {text}
       </button>
    )
  }

export const DangerButtonWithPartially = partiallyApply(Button, {color: "red"});

export const BigSuccessButtonWithPartially = partiallyApply(Button, {size: "large", color: "green"});

