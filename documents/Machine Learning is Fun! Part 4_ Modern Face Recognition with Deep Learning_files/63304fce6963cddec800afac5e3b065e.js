document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css">')
document.write('<div id=\"gist38108599\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-face-detection-system-example-md\" class=\"file\">\n    \n  <div id=\"readme\" class=\"readme blob instapaper_body\">\n    <article class=\"markdown-body entry-content\" itemprop=\"text\"><h2><a href=\"#before-you-start\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-before-you-start\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Before you start<\/h2>\n<p>Make sure you have python, OpenFace and dlib installed. You can either <a href=\"https://cmusatyalab.github.io/openface/setup/\" rel=\"nofollow\">install them manually<\/a> or use a preconfigured docker image that has everying already installed:<\/p>\n<div class=\"highlight highlight-source-shell\"><pre>docker pull bamos/openface\ndocker run -p 9000:9000 -p 8000:8000 -t -i bamos/openface /bin/bash\n<span class=\"pl-c1\">cd<\/span> /root/openface<\/pre><\/div>\n<p>Pro-tip: If you are using Docker on OSX, you can make your OSX /Users/ folder visible inside a docker image like this:<\/p>\n<pre><code>docker run -v /Users:/host/Users -p 9000:9000 -p 8000:8000 -t -i bamos/openface /bin/bash\ncd /root/openface\n<\/code><\/pre>\n<p>Then you can access all your OSX files inside of the docker image at <code>/host/Users/...<\/code><\/p>\n<pre><code>ls /host/Users/\n<\/code><\/pre>\n<h2><a href=\"#step-1\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-step-1\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Step 1<\/h2>\n<p>Make a folder called <code>./training-images/<\/code> inside the openface folder.<\/p>\n<pre><code>mkdir training-images\n<\/code><\/pre>\n<h2><a href=\"#step-2\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-step-2\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Step 2<\/h2>\n<p>Make a subfolder for each person you want to recognize. For example:<\/p>\n<pre><code>mkdir ./training-images/will-ferrell/\nmkdir ./training-images/chad-smith/\nmkdir ./training-images/jimmy-fallon/\n<\/code><\/pre>\n<h2><a href=\"#step-3\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-step-3\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Step 3<\/h2>\n<p>Copy all your images of each person into the correct sub-folders. Make sure only one face appears in each image. There\'s no need to crop the image around the face. OpenFace will do that automatically.<\/p>\n<h2><a href=\"#step-4\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-step-4\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Step 4<\/h2>\n<p>Run the openface scripts from inside the openface root directory:<\/p>\n<p>First, do pose detection and alignment:<\/p>\n<p><code>./util/align-dlib.py ./training-images/ align outerEyesAndNose ./aligned-images/ --size 96<\/code><\/p>\n<p>This will create a new <code>./aligned-images/<\/code> subfolder with a cropped and aligned version of each of your test images.<\/p>\n<p>Second, generate the representations from the aligned images:<\/p>\n<p><code>./batch-represent/main.lua -outDir ./generated-embeddings/ -data ./aligned-images/<\/code><\/p>\n<p>After you run this, the <code>./generated-embeddings/<\/code> sub-folder will contain a csv file with the embeddings for each image.<\/p>\n<p>Third, train your face detection model:<\/p>\n<p><code>./demos/classifier.py train ./generated-embeddings/<\/code><\/p>\n<p>This will generate a new file called <code>./generated-embeddings/classifier.pkl<\/code>. This file has the SVM model you\'ll use to recognize\nnew faces.<\/p>\n<p>At this point, you should have a working face recognizer!<\/p>\n<h2><a href=\"#step-5-recognize-faces\" aria-hidden=\"true\" class=\"anchor\" id=\"user-content-step-5-recognize-faces\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"><\/path><\/svg><\/a>Step 5: Recognize faces!<\/h2>\n<p>Get a new picture with an unknown face. Pass it to the classifier script like this:<\/p>\n<p><code>./demos/classifier.py infer ./generated-embeddings/classifier.pkl your_test_image.jpg<\/code><\/p>\n<p>You should get a prediction that looks like this:<\/p>\n<pre><code>=== /test-images/will-ferrel-1.jpg ===\nPredict will-ferrell with 0.73 confidence.\n<\/code><\/pre>\n<p>From here it\'s up to you to adapt the <code>./demos/classifier.py<\/code> python script to work however you want.<\/p>\n<p>Important notes:<\/p>\n<ul>\n<li>If you get bad results, try adding a few more pictures of each person in Step 3 (especially picures in different poses).<\/li>\n<li>This script will <em>always<\/em> make a prediction even if the face isn\'t one it knows. In a real application, you would look at the confidence score and throw away predictions with a low confidence since they are most likely wrong.<\/li>\n<\/ul>\n<\/article>\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/ageitgey/63304fce6963cddec800afac5e3b065e/raw/6c057cd1cfdffb9b62736d91859fe048d959d70c/face%20detection%20system%20example.md\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/ageitgey/63304fce6963cddec800afac5e3b065e#file-face-detection-system-example-md\">face detection system example.md<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
