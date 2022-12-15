import java.util.Scanner;

public class Assignment_3 {
    
    static void myMethod(String sentence, char letter) {
        
        int firstIndex = sentence.indexOf(letter);
        
        if(firstIndex>=0){  
            //https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring(int,int)
            System.out.println(sentence.substring(firstIndex+1));
        } 
        else{ 
            System.out.println("The letter does not exist in the sentence!");
        }
      
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a sentence: ");  
        String sentence = input.nextLine();

        System.out.print("Enter a character: ");
        char letter = input.next().charAt(0);
        
        myMethod(sentence,letter);

        input.close();
    }
}
