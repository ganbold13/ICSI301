import React from 'react'

const SettingsButton = ({ children, className }: any) => {
    return (
        <div className={className}>
            <div className='px-4 py-2 bg-gray-100 text-xs rounded-md'>
                <strong>
                    {children}
                </strong>
            </div>
        </div>
    )
}

export default SettingsButton