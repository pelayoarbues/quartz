---
author: [[@techhalla on Twitter]]
title: "Train Your Own Flux LoRA..."
date: 2024-09-25
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1625034521174331392/tzX1TLet.jpg)

## Metadata
- Author: [[@techhalla on Twitter]]
- Full Title: Train Your Own Flux LoRA...
- URL: https://twitter.com/techhalla/status/1828479989227934158

## Highlights
- Train your own Flux LoRA in minutes and start crushing it!
  Trust me, it’s super easy, and the results are amazing!
  Let me walk you through it, step by step 🧵👇
  (Bookmark this for later) <video controls><source src="https://video.twimg.com/ext_tw_video/1828469880338739211/pu/pl/yXWpSfZCYLjPpJCz.m3u8?tag=12&v=dfa" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1828469880338739211/pu/vid/avc1/450x270/kissIEQp-jiZvyPm.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828469880338739211/pu/vid/avc1/600x360/wwtCP93rnuxxXSsm.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828469880338739211/pu/vid/avc1/1200x720/zdpv_wAmHUFevUyS.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/techhalla/status/1828479989227934158))
- To create your own LoRA and have it ready anytime, we’ll use Replicate and Huggingface—both great for hosting and running models in the cloud. This tutorial is based on [Valen](https://twitter.com/Valen) awesome YT guide and big thanks to [ramonteleco](https://twitter.com/ramonteleco) for sharing it with me too!
  ![](https://pbs.twimg.com/media/GWAJNliXcAQZjJD.jpg) ([View Tweet](https://twitter.com/techhalla/status/1828479992818254088))
- First, head over to [replicate](https://twitter.com/replicate) and create an account. Once you're in, click on "Explore" and search for the model "lucataco/ai-toolkit." After selecting it, click on "Train" and create a new model. Give it a simple name—we'll need it later.
  ![](https://pbs.twimg.com/media/GWAJ7GcWUAAKg7f.jpg)
  ![](https://pbs.twimg.com/media/GWAKU94WUAU-hPC.jpg) ([View Tweet](https://twitter.com/techhalla/status/1828479997998469605))
- Next, gather 10-12 photos of yourself in different poses, settings, and outfits. Rename each file as "a_photo_of_" plus your model’s name and a number (01, 02…). Compress them into a zip file named "photos_of_" plus your model’s name. Upload the zip in the images section.
  ![](https://pbs.twimg.com/media/GWALFPIWUAAiN4w.png) ([View Tweet](https://twitter.com/techhalla/status/1828480002658312272))
- Alright, now we need the token from [huggingface](https://twitter.com/huggingface). Go to your account (create one if you don’t have it), then in Settings, select Access Tokens. Create a new token with sufficient permissions and copy it. You’ll paste this token later in the corresponding section on Replicate. 
  ![](https://pbs.twimg.com/media/GWALpsaXwAAmmYx.jpg) 
  ![](https://pbs.twimg.com/media/GWALsF9WsAACfHI.png) ([View Tweet](https://twitter.com/techhalla/status/1828480006709768345))
- In Huggingface, also create a model and save the name you use; we’ll need it later, along with the owner’s name. For example, techhalla/modelname.
  ![](https://pbs.twimg.com/media/GWANRI2X0AA0G8e.png) ([View Tweet](https://twitter.com/techhalla/status/1828480011029864687))
- Before we continue, keep in mind that there’s a cost involved. Training the model costs around $2.50, and each generation afterward is about $0.05. This post isn’t promotional—I’ve paid to create this content, but trust me, it’s worth it.
  Let’s keep going! <video controls><source src="https://video.twimg.com/ext_tw_video/1828475307512213504/pu/pl/Z54HSJzjFuWF5Fvp.m3u8?tag=12" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1828475307512213504/pu/vid/avc1/450x270/LuSFSsuT31OrqnMA.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828475307512213504/pu/vid/avc1/600x360/7nOZsgtOtqC1JzwO.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828475307512213504/pu/vid/avc1/1200x720/pLb9AbOWX4iR05KG.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/techhalla/status/1828480015555534950))
- Leave the rest of the parameters as they are by default, paste the Huggingface model name in repo_id field, and click on "Create Training." This process will take about 20 to 30 minutes. That’s the time it takes to train your custom LoRA.
  ![](https://pbs.twimg.com/media/GWANbVqXwAA-crX.png) ([View Tweet](https://twitter.com/techhalla/status/1828480019212939432))
- Once your model is ready, search for "lucataco/flux-dev-lora." Before running a prompt, go to the `hf_lora` parameter and enter your model’s name. You can also tweak the weight to control how closely the images resemble you.
  ![](https://pbs.twimg.com/media/GWAOXCKXkAAI3cc.jpg)
  ![](https://pbs.twimg.com/media/GWAOaGEWkAApVJ4.jpg) ([View Tweet](https://twitter.com/techhalla/status/1828480023071715677))
- Once everything is set up, just click Run! Super easy.
  Here are some examples. For prompts, check my profile—I share them daily, and you can reuse them. Just include a brief description of yourself in the prompt, like "a bald man with a beard" + the rest. 
  ![](https://pbs.twimg.com/media/GWAO80rXQAAmMjZ.jpg) 
  ![](https://pbs.twimg.com/media/GWAO802WEAAvc5z.jpg) 
  ![](https://pbs.twimg.com/media/GWAO81LW0AAsYEN.jpg) 
  ![](https://pbs.twimg.com/media/GWAO80QXgAAGUFp.jpg) ([View Tweet](https://twitter.com/techhalla/status/1828480028474253436))
- But wait... what about the quality of the previous images? They've been enhanced using [Magnific_AI](https://twitter.com/Magnific_AI). Just upload the image, tweak the settings, and get high-quality, high-resolution results. Amazing! 
  ![](https://pbs.twimg.com/media/GWAPU0dXoAA6Vig.jpg) 
  ![](https://pbs.twimg.com/media/GWAPU0pXwAAsNmQ.jpg) 
  ![](https://pbs.twimg.com/media/GWAPU0nXsAAzldr.jpg) 
  ![](https://pbs.twimg.com/media/GWAPU0mWAAANHVh.jpg) ([View Tweet](https://twitter.com/techhalla/status/1828480033960145359))
- And are we done here? Not at all. You can take it further by animating the images with your favorite video generation tool. I’ve used [runwayml](https://twitter.com/runwayml) Gen3 Turbo and [LumaLabsAI](https://twitter.com/LumaLabsAI) DM. For video prompts, feel free to use my GPTs! If you need them, I'll drop them in the comments. Just ask! <video controls><source src="https://video.twimg.com/ext_tw_video/1828478874188972033/pu/pl/f5mRnkrET8nm6FZ-.m3u8?tag=12" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1828478874188972033/pu/vid/avc1/450x270/ES3JGthq3Jj7y4Va.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828478874188972033/pu/vid/avc1/600x360/AbWX11TgtJwkfl9Q.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828478874188972033/pu/vid/avc1/1200x720/5LnW1UkdWnwJpns_.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video><video controls><source src="https://video.twimg.com/ext_tw_video/1828478939951427584/pu/pl/TO8j6agni5jclS_Z.m3u8?tag=12" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1828478939951427584/pu/vid/avc1/488x270/2HMZayRYgxDsqLRj.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828478939951427584/pu/vid/avc1/650x360/A7sZJ3e83zkD9d2T.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1828478939951427584/pu/vid/avc1/1302x720/Rmb4_Pml1mSPVROJ.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/techhalla/status/1828480038674575647))
- I hope you enjoyed this and can use it in your projects. Share your results, questions... I’ll be watching!
  Follow me at [techhalla](https://twitter.com/techhalla) for more content like this, and don’t forget to like, repost, and bookmark the main post—it helps me a lot!
  https://t.co/D5KWIsPctL ([View Tweet](https://twitter.com/techhalla/status/1828480153422323923))
