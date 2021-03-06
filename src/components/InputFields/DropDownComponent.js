import React from "react";
function DropDownComponent({
  label,
  className,
  items,
  handleChange,
  value,
  placeholder,
  onChange,
  error,
  showErrorMessage = true,
  ...props
}) {
  return (
    <div className="">
      <p className="text-dark font-medium text-sm">{label}</p>
      <select
        onChange={onChange}
        placeholder="select"
        value={value}
        className={`${
          error ? "ring-1 ring-red" : ""
        } px-3 rounded-16 w-full bg-primary-200 mt-0 py-5`}
        {...props}
      >
        {!value && <option value={""}>{placeholder}</option>}
        {items.map((opt) => (
          <option value={opt.key}>{opt.value}</option>
        ))}
      </select>
      {error && showErrorMessage ? (
        <p className="text-xxs ml-2 text-red">{error}</p>
      ) : null}
    </div>
  );
}

export default DropDownComponent;
