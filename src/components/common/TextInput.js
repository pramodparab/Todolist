import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
	name,
	label,
	onChange,
	placeholder,
	value,
	maxLength,
	error,
	...other
}) => {
	let wrapperClass = "form-group";
	if (error && error.length > 0) {
		wrapperClass += " " + "has-error";
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input
					type="text-area"
					name={name}
					className={
						error ? "form-control border border-danger" : "form-control"
					}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					maxLength={maxLength}
					{...other}
				/>
				{error && (
					<div className="text-danger">
						<small>{error}</small>
					</div>
				)}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default TextInput;
