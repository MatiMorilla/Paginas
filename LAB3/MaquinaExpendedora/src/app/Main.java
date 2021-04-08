package app;

import model.MaquinaExpendora;
import java.util.Scanner;

public class Main {

	static Scanner scan;
	
	public static void main(String[] args) {
		
		scan = new Scanner(System.in);
		MaquinaExpendora m1;
		int opcion = 0;
		int precioBoleto = 0;
		float nuevoPrecio;
		
		System.out.println("Ingrese el precio del boleto: ");
		precioBoleto = scan.nextInt();
		m1 = new MaquinaExpendora(precioBoleto);
		do
		{
			mostrarMenu();
			opcion = scan.nextInt();
			switch(opcion)
			{
			case 1:
				m1.encender();
				System.out.println("Maquina encendida");
				break;
			case 2:
				m1.apagar();
				System.out.println("Maquina apagada");
				break;
			case 3:
				System.out.println("Ingrese el nuevo precio: ");
				nuevoPrecio = scan.nextFloat();
				m1.modificarPrecio(nuevoPrecio);
				break;
			case 4:
				System.out.println("El precio es: " + m1.mostrarPrecio());
				break;
			case 5:
				System.out.println("Dinero retirado \n" + m1.retirarDinero());
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				System.out.println(m1.emitirBoleto());
				
				break;
			default:
				break;
			}
			
		}while(opcion != 0);

	}
	
	public static void mostrarMenu()
	{
		System.out.println("1 - Encender maquina");
		System.out.println("2 - Apagar maquina");
		System.out.println("3 - Ingresar el precio del boleto");
		System.out.println("4 - Mostrar precio");
		System.out.println("5 - Retirar dinero");
		System.out.println("6 - Reiniciar stock");
		System.out.println("7 - Mostrar boletos veniddos");
		System.out.println("8 - Reinicio de fabrica");
		System.out.println("9 - Emitir boleto");
		System.out.println("0 - Para salir");
	}

}
