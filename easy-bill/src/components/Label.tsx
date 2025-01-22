const Label = ({
    id,
    value,
    name,
    selectedValue,
    onChange,
    children,
  }: {
    id: string;
    value: string;
    name: string;
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
  }) => {
    const isSelected = selectedValue === value;
  
    return (
      <label
        htmlFor={id}
        className={`border ${
          isSelected ? "border-green-500" : "border-transparent"
        } bg-white rounded-lg p-4 cursor-pointer transition`}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={isSelected}
          onChange={onChange}
          className="hidden"
        />
        {children}
      </label>
    );
  };

export default Label