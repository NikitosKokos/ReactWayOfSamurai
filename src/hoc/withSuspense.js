import React from 'react'
import Preloader from '../components/common/Preloader/Preloader'



export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div className='preloader-container'><Preloader /></div>}>
                    <Component {...props} />
                </React.Suspense>
    }
}
