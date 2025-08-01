const BuyMeACoffee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
              ☕
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buy Me a Coffee
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              If you found my work helpful or just want to support what I do, 
              consider buying me a coffee! It helps keep me caffeinated and motivated to create more awesome projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.buymeacoffee.com/alexsnyman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.766-1.618a4.85 4.85 0 0 0-1.54-1.066c-.734-.32-1.618-.26-2.522.1a12.023 12.023 0 0 0-2.105.777l-.258.112c-.706.315-1.712.71-2.653.734-.941.023-1.95-.383-2.653-.734l-.258-.112a12.023 12.023 0 0 0-2.105-.777c-.904-.36-1.788-.42-2.522-.1a4.85 4.85 0 0 0-1.54 1.066c-.378.455-.647 1.02-.766 1.618L3.784 6.415a7.8 7.8 0 0 0-.24 1.94v7.005c0 .94.627 1.775 1.528 2.047l8.397 2.533c.353.106.746.106 1.099 0l8.397-2.533c.9-.272 1.528-1.108 1.528-2.047V8.355c0-.665-.088-1.32-.24-1.94z"/>
              </svg>
              Buy Me a Coffee
            </a>
            
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Support my work
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Your support means the world to me and helps me continue building amazing projects! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyMeACoffee