OUTPUT = just_tweet_button.zip

$(OUTPUT) :
	cd src && zip -r9q ../$@ .

.PHONY: $(OUTPUT)
