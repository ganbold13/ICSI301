import React from 'react'

const ProfileItemPhoto = ({photo}:any) => {
    return (
        <div className="flex relative items-center">
            <div className="w-full flex relative transition p-1">
                <img
                    className="flex-1 object-fill w-20"
                    src={photo || "https://picsum.photos/400/400"}
                />
            </div>
        </div>
    );
}

export default ProfileItemPhoto