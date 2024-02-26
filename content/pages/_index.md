+++
date = 2024-02-26T01:11:55-05:00
type = 'page'
image = 'Test'
+++

# Projects
A list of projects I've worked on that I like to showcase.

## [PyMoe](https://github.com/ccubed/PyMoe)
PyMoe started out as a library I used in my AngelBot project to interact with the APIs available at various websites focusing on Anime, Manga, Light Novels, Web Novels, and Visual Novels. It has now become it's own independent project supporting the latest versions of Python 3 and recently updated to include several new services. It has over eighty stars and is currently used in over six hundred projects on Github.

## [Earl](https://github.com/ccubed/Earl)
Earl also started out as a library to be used in Angelbot, however it later grew into a more general use project. Earl is a C++ extension for Python built against CPython to allow native packing and unpacking of the External Term Format used by Erlang. At the time, this was created to make parsing the ETF data received by Discord faster. Bots made in other languages had a slight speed advantage at parsing ETF. This extension leveled the playing field by utilizing C++ to very quickly serialize ETF into and out of Python objects.

## [Downloop](https://github.com/ccubed/Downloop)
Downloop was a hobby project to create a Python image host with a built in web interface and API that would allow anyone to programmatically create and distribute a link to a hosted image. Downloop was focused on privacy and kept no data on who uploaded what. Images were not stored by name making them completely anonymous and all images were returned as binary data. It was able to shard itself automatically to distribute load, direct requests to the correct shard, and separated all stored image data into different root database tables based on shard. This meant that no one shard had a copy of all the images and that shards didn't know what existed between them. It also meant that we had no way to recover an image link if someone lost their initial link given upon image upload.