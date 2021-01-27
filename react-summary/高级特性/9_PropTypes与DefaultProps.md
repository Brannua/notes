> https://reactjs.org/docs/typechecking-with-proptypes.html

- React has some built-in typechecking abilities.
- To run typechecking on the props for a component
- you can assign the special propTypes property

- React.PropTypes has moved into a different package since React v15.5.
- Please use the prop-types library instead.

- When an invalid value is provided for a prop, a warning will be shown in the JavaScript console, but won't prevent code from continuing.

- You can chain PropTypes with `isRequired` to make sure a warning is shown if the prop isn't provided.

- For performance reasons, propTypes is only checked in development mode.

  ```js
    import PropTypes from 'prop-types';

    function Demo(props) {
      return <div onClick={() => { props.handleClick() }}>{ props.value }</div>
    }

    Demo.propTypes = {
      handleClick: PropTypes.func,
      value: PropTypes.string,
    }
  ```

- The propTypes typechecking happens after defaultProps are resolved,
- so typechecking will also apply to the defaultProps.
- Specifies the default values for props:

  ```js
    // define default values for props
    Demo.defaultProps = {
      key: '默认val'
    }
  ```