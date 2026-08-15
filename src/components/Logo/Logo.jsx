import './Logo.scss'
import classNames from 'classnames'
import { getBaseUrl } from '@/utils/getBaseUrl'


const Logo = (props) => {
    const {
        className,
        loading = 'lazy',
    } = props
    const title = 'Home'

    return (
        <a href={getBaseUrl()}
            className={classNames(className, 'logo')}
            title={title}
            aria-label={title}
        >
            <img
                src={getBaseUrl('logo.svg')}
                alt=""
                className="logo__image"
                width={199}
                height={60}
                loading={loading}
                
            />
        </a>
    )
}

export default Logo