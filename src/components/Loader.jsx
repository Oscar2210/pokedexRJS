import { Ping } from '@uiball/loaders'

export const Loader = () => {
    return (
        <div className="container-loader">
            <Ping
                size={45}
                speed={2}
                color="black"
            />
        </div>
    )
}