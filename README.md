# Photoshop-Scripts
## Diverse Scripts and Actions, I created for  Photoshop 



### Photoshop Scripts & Panels for Smart Object Stack Modes 
This panel is designed for Photoshop CC 2014 to CC 2019 (and more). 
It allows you to experiment Smart Object Stack Modes more quickly than using the Layers > Smart Object > Stack Mode > "Modes" submenu.


**Tutorials** on **StackMix CC** and **Infos** on the creator: 
* https://www.youtube.com/watch?v=ttOEQzNQzXk&t=10s [EN]
* https://www.youtube.com/watch?v=fYjJR9v_ZDk [FR]
* https://sbaril.myportfolio.com/

--

### Photoshop CC Installer Compatibility
*Installer compatible with the Photoshop versions from* ***CC 2014*** *to* ***CC 2019+***


--

### Quick explanation in 4 steps of the installation process:
1. **Download** the **Script** (.jsx file) you want (green button)
2. **Copy the downloaded JSX file** in *(ATN file on the Presets > Actions folder)*:
	* **Win:** **C:** **Program Files**: **Adobe Photoshop CC** [YourVersion]: **Presets**: **Scripts**: [place here or here in a new folder named as you wish]
	* **Mac:** [YourDiskName] > **Applications** > **Adobe Photoshop CC** [YourVersion] > **Presets** > **Scripts** > [place here or here in a new folder named as you wish]
3. **Restart Photoshop**
4. You'll find then the Script available in the **File** > **Scripts** > [NameOfTheScript] menu
5. You can assign a Keyboard Shortcut to this Script using the **Edit** > **Keyboard Shortcuts…** menu :)


--

### List of the Scripts 

* **Colorisation_SplitProof.jsx** 
	* Diplay your file on different Windows with Softproofing.
* **ExtractLinesDynamic.jsx**
	* Non-destructive: Extract Grayscale Lines from the Background with Lines inside a Smart Object.
* **ExtractLinesDynamicSimple.jsx**
	* Non-destructive: Extract Grayscale Lines from the Background with Lines inside a Folder in the main document.
* **ExtractDrawingBg.jsx** 
	* Extract Grayscale Lines from the Background.
* **ExtractDrawingBgColor.jsx** 
	* Extract Grayscale Lines from the Background and creating an Empty Layer for the Color below the Lines layer.
* **ExtractColorFromBG.jsx**
	* Experimental Script to "Closely" Extract Content from a White Background.
* **NewLayer_DefaultCustomName.jsx**
	* Simple Script allowing to create a New Layer with your Custom Name to avoid "Layer 1", "Layer 2" numbering.
	* The JPG **NewLayer_DefaultCustomName-Customization.jpg** explain how to customize this Script.
	* Then in the *Edit > Keyboard shortcuts… > Files > Scripts* section find the script name and assign it the *Cmd/Ctrl+Shift+Option/Alt+N* (or on Cmd/Ctrl+Shift+N) shortcut.
* **NewLayerBelowName.jsx** 
	* Creating a Layer below the selected one with a Dialog box to rename it.
* **ExtractObjectAndCleanBG.jsx** 
	* Select first an object on a flat image (with the Object Tool for example), then use this script to auto copy it on its own layer then auto remove it from the background. 
* **ExtractObjectAndCleanBGCAFspace.jsx** 
	* Select first an object on a flat image (with the Object Tool for example), then use this script to auto copy it on its own layer then auto remove it from the background, with more control using the Content-aware fill workspace.
* **Rasterize-All-Smart-Objects-sbaril.jsx** 
	* Rasterize all the Smart Objects in the Active document.
* **Unhide-All-Layers-Configurable-sbaril.jsx** 
	* The first run of the script unhide the hidden layers (open the script to configure options like popup notification, taking in consideration locked-layers and more)
 	* The second run of the script restore the previous hidden layers state


### List of the Actions 

* **Dimension-v01.atn** 
	* Starting point Action to Extract in Photoshop the Transparent part of an Object (glass…) rendered in Dimension on White Background. With different Layers/Masks available to finetune the result regarding your image.
* **Photo-v01.atn** 
	* Simple Frequency Separation Actions.
* **Quick-Object-Extraction.atn** 
	* Set of Photoshop Actions used to create "ExtractObjectAndCleanBG.jsx" and "ExtractObjectAndCleanBGCAFspace.jsx", so that you can customize them if needed. 
* **Firefly-Actions.atn** 
	* "Generative-Fill-Direct" by assigning to it an Action keyboard shortcut, you'll be able to call the Generative Fill feature without the Prompt dialog box.
	* "Solid-Density-Mask" to quickly use the Quick Mask mode to generate patial Generative FIll (try it with "oil painting" or "Watercolor").
	* "GenFill-Auto-Top-Left-to-Right-x10" to do up to 10 Generative Fills from the top left corner. Workaround for a "Generative Expand" at the document quality with Firefly Image 1 model (limited to 1024x1024px generation).
	* "GenFill-Semi-Auto-Left-to-Right-x10" to do up to 10 Generative Fills "free to position" auto created selection. Workaround for a "Generative Expand" at the document quality with Firefly Image 1 model (limited to 1024x1024px generation).
	* "GenFill-Manual-Selection-Left-to-Right-x10" to do up to 10 Generative Fills from your own acutal selection. Workaround for a "Generative Expand" at the document quality with Firefly Image 1 model (limited to 1024x1024px generation).
* **Harmonize-Enhancement.atn**
 	* The main Action is "Smart-SO-2" and will convert your "no-layer" image to a Smart Object containing 2 Layer Comps: one showing the original image, and the other one containing the Low Frequency details of this image, so that you'll be able to pick it in "Linear Light" blending mode to enhance the "Harmonized Layer".
* **Frequency-Separation.atn**
 	* Classical 8bit Frequency Separation Actions: The Auto one is detecting if your file contains Layers or not, and pick between the 2 other Actions.
* **Generative-Upscale-Bypass-4096px-Limit.atn**
 	* Set of Actions to bypass the limit of 4096 pixels of the Generative Upscale feature of Photoshop 2025 Public Beta.

--	

Enjoy :)

--	

**Disclaimer:** I'm not a developer so all the Scripts are generated via Photoshop **Actions** converted via the **x-tools** (ActionFileToJavascript.jsx):

http://ps-scripts.sourceforge.net/xtools.html

or coded using AI tools like ChatGPT, Claude.ai and more.
