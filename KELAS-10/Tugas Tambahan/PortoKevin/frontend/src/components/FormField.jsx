import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function FormField({
    label,
    name,
    type = 'text',
    value,
    error,
    autoComplete,
    onChange,
    required = true,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
        <label>
            {label}
            <span className="input-wrap">
                <input
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={(event) => onChange(name, event.target.value)}
                    autoComplete={autoComplete}
                    required={required}
                />
                {isPassword && (
                    <button
                        className="icon-button"
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                    >
                        {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                    </button>
                )}
            </span>
            {error && <span className="form-error">{error}</span>}
        </label>
    );
}
