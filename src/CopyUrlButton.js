
const CopyUrlButton = () => {
    const [recentlyClicked, setRecentlyClicked] = React.useState(false)
    const handleCopyUrl = () => {
        setRecentlyClicked(true)
        let dummy = document.createElement('input'), text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        setTimeout(() => setRecentlyClicked(false), 5000)
    }

    return (
        <button
            type='button'
            className='btn btn-light border-dark copy-url-button'
            onClick={handleCopyUrl}
            disabled={recentlyClicked}
        >

            {recentlyClicked ?
                <div>
                    <span>Copied URL to Clipboard!</span>
                </div>
                :
                <div>
                    <span>Share Search</span>
                </div>
            }

        </button>
    );
}

export default CopyUrlButton;