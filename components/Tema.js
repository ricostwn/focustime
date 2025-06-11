import React from 'react';

export default function Tema({ bgColor, setBgColor, colors, textColor }) {
    const changeColor = () => {
        const idx = colors.findIndex((c) => c.bg === bgColor);
        const nextColor = colors[(idx + 1) % colors.length].bg;
        setBgColor(nextColor);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
            padding: 24,
            borderRadius: 16,
            margin: 24,
            color: textColor,
            transition: 'background 0.3s, color 0.3s',
        }}>
            <button
                onClick={changeColor}
                style={{
                    marginBottom: 16,
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: 'none',
                    background: bgColor,
                    color: textColor,
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
            >
                Change Background
            </button>
            <div style={{ display: 'flex', gap: 10 }}>
                {colors.map((color) => (
                    <button
                        key={color.bg}
                        onClick={() => setBgColor(color.bg)}
                        style={{
                            backgroundColor: color.bg,
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            border: bgColor === color.bg ? '3px solid #333' : '2px solid #fff',
                            cursor: 'pointer',
                            outline: 'none',
                        }}
                        aria-label={`Pilih warna ${color.bg}`}
                    />
                ))}
            </div>
        </div>
    );
}