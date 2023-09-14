
import { FooterSoby, HeaderSoby } from '.'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <>

            <HeaderSoby />
            <div className=" lg:min-h-screen min-h-auto  ">
                <Outlet />
            </div>
            <FooterSoby />
        </>
    )
}

export default WebsiteLayout