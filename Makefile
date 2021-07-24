install:
	mkdir -p .strictly
	curl -L https://github.com/strictly-lang/compiler/releases/download/release/strictly-linux-x64.zip -o .strictly/strictly-linux-x64.zip
	unzip .strictly/strictly-linux-x64.zip -d .strictly