import cv2 
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\hai\Desktop\SPECTRATHON\Tesseract-OCR\tesseract.exe'

def mostFrequent(arr, n): 
  maxcount = 0; 
  element_having_max_freq = 0; 
  for i in range(0, n): 
    count = 0
    for j in range(0, n): 
      if(arr[i] == arr[j]): 
        count += 1
    if(count > maxcount): 
      maxcount = count 
      element_having_max_freq = arr[i] 
    
  return (element_having_max_freq,maxcount)


frame = cv2.imread(r"C:\Users\hai\Desktop\SPECTRATHON\assets\plate.jpeg")
cv2.imshow('frame', frame)
cv2.waitKey(1)
predicted_res = pytesseract.image_to_string(frame, lang ='eng',config ='--oem 1 --psm 6 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
filter_predicted_res = "".join(predicted_res.split()).replace(":", "").replace("-", "")
print(filter_predicted_res)

# vid = cv2.VideoCapture(0) 
# pred_NP = []
# while(True):
#     ret, frame = vid.read() 
#     cv2.imshow('frame', frame)
#     cv2.waitKey(1)
#     predicted_res = pytesseract.image_to_string(frame)
#     filter_predicted_res = "".join(predicted_res.split()).replace(":", "").replace("-", "")
#     if filter_predicted_res:
#         pred_NP.append(filter_predicted_res)
#     freq = mostFrequent(pred_NP,len(pred_NP))
#     print(pred_NP)
#     if freq[1]>10:
#        print(freq[0])
#        break
# vid.release() 
# cv2.destroyAllWindows() 

# frame = cv2.imread(r"C:\Users\hai\Desktop\SPECTRATHON\assets\plate.jpeg")
# cv2.imshow('frame', frame)
# cv2.waitKey(1)
# predicted_res = pytesseract.image_to_string(frame, lang ='eng',config ='--oem 1 --psm 6 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
# filter_predicted_res = "".join(predicted_res.split()).replace(":", "").replace("-", "")
# print(filter_predicted_res)



#, lang ='eng',config ='--oem 1 --psm 6 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'