.. _5.-How-to-Install-the-Driver-of-CP2102-on-MAC-System:

5. How to Install the Driver of CP2102 on MAC System
====================================================

Connect board we provide to your computer, and open Arduino IDE

.. image:: media/image-20250417082903072.png
   :alt: image-20250417082903072

Click Tools to select Board Arduino Uno and /dev/cu.usbserial-001

.. image:: media/image-20250417083037840.png
   :alt: image-20250417083037840

Tap \**Upload \*\* to upload code.If code is uploaded successfully,you
will view **Done uploading**.

.. image:: media/image-20250417083148417.png
   :alt: image-20250417083148417

Note: If code is uploaded unsuccessfully,you need to install driver of
CP2102,please continue to follow the instructions as below:

DownloadthedriverofCP2102:

https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

1.Select Mac OSX edition

.. image:: media/image-20250417083549925.png
   :alt: image-20250417083549925

2.Unzip the downloaded package

.. image:: media/image-20250417083615847.png
   :alt: image-20250417083615847

3.Open folder and double-click SiLabsUSBDriverDisk.dmg file.

.. image:: media/image-20250417083758947.png
   :alt: image-20250417083758947

4.You will view the following files as follows:

.. image:: media/image-20250417083918581.png
   :alt: image-20250417083918581

5.Double-click <font color="FF0000">Install  CP210x VCP
Driver</font>,tick **Don’twarn** **me....image** and tap Open.

.. image:: media/image-20250417084225039.png
   :alt: image-20250417084225039

6.Tap Continue

.. image:: media/image-20250417084300537.png
   :alt: image-20250417084300537

7.Tap Agree,\ **and**\ Continue

.. image:: media/image-20250417084352129.png
   :alt: image-20250417084352129

8.Click Continue and input your password.

.. image:: media/image-20250417084437049.png
   :alt: image-20250417084437049

.. image:: media/image-20250417084445052.png
   :alt: image-20250417084445052

9.Click Open Security Preferences

.. image:: media/image-20250417084527626.png
   :alt: image-20250417084527626

10.Click the lock to unlock security & privacy preference.

.. image:: media/image-20250417084623185.png
   :alt: image-20250417084623185

11.Tap Unlock and enter your Username and password

.. image:: media/image-20250417084724770.png
   :alt: image-20250417084724770

12.Then click Allow

.. image:: media/image-20250417084803825.png
   :alt: image-20250417084803825

13.Back to installation page,and wait to install.

.. image:: media/image-20250417084848672-17448509322411.png
   :alt: image-20250417084848672

14.Successfully installed

.. image:: media/image-20250417084920120.png
   :alt: image-20250417084920120

15.Then enter ArduinoIDE,click Tools and select Board Arduino Uno and
/dev/ cu.SLAB_USBtoUAPT

.. image:: media/image-20250417085241510.png
   :alt: image-20250417085241510

16.Click\ |image-20250417085312966|\ to upload code and show “Done
uploading”.

.. image:: media/image-20250417085354405.png
   :alt: image-20250417085354405

.. |image-20250417085312966| image:: media/image-20250417085312966.png
