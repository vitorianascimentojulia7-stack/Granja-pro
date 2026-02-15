name: granjapro
description: Sistema profissional de gestão suína
publish_to: "none"
version: 1.0.0+1

environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter

flutter:
  uses-material-design: true
import 'package:flutter/material.dart';
import 'login_screen.dart';
import 'package:flutter/material.dart';
import 'home_screen.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          child: const Text("Entrar no GranjaPro"),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const HomeScreen()),
            );
          },
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'animal_screen.dart';
import 'reproduction_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("GranjaPro")),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            child: const Text("Cadastro de Animais"),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const AnimalScreen()),
              );
            },
          ),
          ElevatedButton(
            child: const Text("Controle Reprodutivo"),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const ReproductionScreen()),
              );
            },
          ),
        ],
      ),
    );
  }
}
class Animal {
  String brinco;
  String sexo;

  Animal({required this.brinco, required this.sexo});
}
import 'package:flutter/material.dart';
import 'animal_model.dart';

class AnimalScreen extends StatefulWidget {
  const AnimalScreen({super.key});

  @override
  State<AnimalScreen> createState() => _AnimalScreenState();
}

class _AnimalScreenState extends State<AnimalScreen> {
  List<Animal> animals = [];
  TextEditingController brincoController = TextEditingController();
  TextEditingController searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    List<Animal> filtered = animals
        .where((a) =>
            a.brinco.contains(searchController.text))
        .toList();

    return Scaffold(
      appBar: AppBar(title: const Text("Animais")),
      body: Column(
        children: [
          TextField(
            controller: brincoController,
            decoration: const InputDecoration(labelText: "Brinco"),
          ),
          ElevatedButton(
            onPressed: () {
              setState(() {
                animals.add(Animal(
                    brinco: brincoController.text,
                    sexo: "Fêmea"));
                brincoController.clear();
              });
            },
            child: const Text("Cadastrar"),
          ),
          const Divider(),
          TextField(
            controller: searchController,
            decoration:
                const InputDecoration(labelText: "Pesquisar por brinco"),
            onChanged: (value) {
              setState(() {});
            },
          ),
          Expanded(
            child: ListView.builder(
              itemCount: filtered.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(filtered[index].brinco),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}import 'package:flutter/material.dart';

class ReproductionScreen extends StatefulWidget {
  const ReproductionScreen({super.key});

  @override
  State<ReproductionScreen> createState() =>
      _ReproductionScreenState();
}

class _ReproductionScreenState extends State<ReproductionScreen> {
  final TextEditingController matrizController =
      TextEditingController();
  final TextEditingController dataController =
      TextEditingController();

  List<String> registros = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Controle Reprodutivo")),
      body: Column(
        children: [
          TextField(
            controller: matrizController,
            decoration:
                const InputDecoration(labelText: "Brinco da Matriz"),
          ),
          TextField(
            controller: dataController,
            decoration:
                const InputDecoration(labelText: "Data da Cobertura"),
          ),
          ElevatedButton(
            onPressed: () {
              setState(() {
                registros.add(
                    "Matriz: ${matrizController.text} - Data: ${dataController.text}");
                matrizController.clear();
                dataController.clear();
              });
            },
            child: const Text("Registrar"),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: registros.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(registros[index]),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}


void main() {
  runApp(const GranjaPro());
}

class GranjaPro extends StatelessWidget {
  const GranjaPro({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LoginScreen(),
    );
  }
}

