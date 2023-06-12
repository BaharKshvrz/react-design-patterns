const printProps = Component => {
    return (props) => {
        return <Component {...props} />
    }
}

export default printProps;